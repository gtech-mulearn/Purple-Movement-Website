import { useRef, useState } from "react";
import certificateURL from '/certificate.svg?url';

export const useCertificate = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [error, setError] = useState<string | null>(null);
    const generateCertificate = async ({ certificateId, name }: { certificateId: string, name: string }) => {
        if (!canvasRef.current) return
        try {
            const formattedId = 'TPMC' + certificateId

            const textCoordinates = [
                {
                    x: 270,
                    y: 280,
                    fontSize: 40,
                    color: '#fff',
                    maxWidth: 800,
                    maxLines: 2,
                    value: name.slice(0, 40) + (name.length > 40 ? '...' : ''),
                    hAlign: 'center' as const,
                    fontFamily: 'Montserrat',
                },
                {
                    x: 322,
                    y: 458,
                    fontSize: 24,
                    color: '#fff',
                    maxWidth: 400,
                    maxLines: 1,
                    value: formattedId,
                    hAlign: 'center' as const,
                    fontFamily: 'Montserrat',
                }
            ];

            // First check if the image exists
            const img = new Image();
            img.src = certificateURL

            await new Promise((resolve, reject) => {
                img.onload = resolve
                img.onerror = () => reject(new Error('Failed to load certificate template'));
            });

            await drawTextOnCanvas(
                canvasRef.current,
                '/certificate.svg',
                textCoordinates
            );
        } catch (err) {
            console.error('Error generating certificate:', err);
            setError(err instanceof Error ? err.message : 'Failed to generate certificate');

        }
    };
    return {
        canvasRef,
        error,
        generateCertificate
    }

}
interface TextCoordinate {
    x: number;
    y: number;
    fontSize: number;
    color: string;
    maxWidth: number;
    maxLines: number;
    value: string;
    hAlign: 'left' | 'center' | 'right';
}

export const drawTextOnCanvas = async (
    canvas: HTMLCanvasElement,
    imageUrl: string,
    textCoordinates: TextCoordinate[],
) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load the image
    const img = new Image();

    return new Promise<void>((resolve, reject) => {
        img.onload = () => {
            const scale = window.devicePixelRatio || 1;

            // Set canvas dimensions to match the image
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            canvas.style.width = `${img.width}px`;
            canvas.style.height = `${img.height}px`;
            ctx.scale(scale, scale);
            // Draw the background image
            ctx.drawImage(img, 0, 0);

            // Draw text on top of the image
            textCoordinates.forEach((textCoord) => {
                const { x, y, fontSize, color, maxWidth, maxLines, value, hAlign } = textCoord;

                // Configure text properties
                ctx.font = `bold ${fontSize}px "Poppins", sans-serif`;
                ctx.fillStyle = color;
                ctx.textAlign = hAlign;

                // Calculate positions relative to template dimensions
                const relativeX = (x / 1080) * canvas.width;
                const relativeY = (y / 1080) * canvas.height;
                const relativeMaxWidth = (maxWidth / 1080) * canvas.width;

                // Fixed line height, scaled relative to canvas height
                const lineHeight = (fontSize * 1.2) * (canvas.height / 1080);

                // Split text into lines to handle wrapping
                const words = value.split(' ');
                const lines: string[] = [];
                let currentLine = '';

                words.forEach((word) => {
                    const testLine = currentLine + (currentLine ? ' ' : '') + word;
                    const metrics = ctx.measureText(testLine);

                    if (metrics.width > relativeMaxWidth && currentLine !== '') {
                        lines.push(currentLine);
                        currentLine = word;
                    } else {
                        currentLine = testLine;
                    }
                });

                if (currentLine) {
                    lines.push(currentLine);
                }

                // Limit to maxLines
                if (lines.length > maxLines) {
                    lines.length = maxLines;
                }

                // Calculate total height for vertical centering
                const totalHeight = lineHeight * (lines.length - 1);
                const startY = relativeY - totalHeight / 2;

                // Draw each line
                lines.forEach((line, index) => {
                    let xPosition = relativeX;
                    const yPosition = startY + index * lineHeight;
                    ctx.fillText(line, xPosition, yPosition);
                });
            });

            resolve();
        };

        img.onerror = () => {
            reject(new Error('Failed to load certificate template image'));
        };

        img.src = imageUrl;
    });
}; 