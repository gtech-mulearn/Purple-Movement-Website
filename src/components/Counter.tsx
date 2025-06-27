import { collection, getCountFromServer } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../lib/firebase";

const Counter = ({ value, update }: { value: number | undefined; update: (value: number) => void }) => {
    useEffect(() => {
        if (value === undefined)
            fetchTotalCount().then(update);
    }, []);

    return (
        <div className="flex flex-col  justify-center items-center gap-2 xs:gap-4">
            <div className="text-white text-sm xs:text-lg sm:text-2xl text-center">
                {/* Be a part the of this movement, along with */}
                Join with us and be a part of the change.
            </div>
            <div className="flex flex-row gap-3 text-xl sm:text-4xl md:text-3xl font-bold text-white mt-2 justify-center">
                {value && <>
                    {value} + Initiators
                </>}
            </div>
        </div>
    );
};

export default Counter;

const fetchTotalCount = async () => {
    try {
        const colRef = collection(db, "FormData");
        const snapshot = await getCountFromServer(colRef);
        const count = snapshot.data().count;
        return count;
    } catch (error) {
        console.error("Error fetching total count:", error);
        return 0;
    }
}