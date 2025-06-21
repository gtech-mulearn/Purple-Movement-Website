import { collection, getCountFromServer } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";

const Counter = () => {
    const [totalCount, setTotalCount] = useState<number>();
    useEffect(() => {
        if (totalCount !== undefined) return
        fetchTotalCount().then(setTotalCount);
    }, []);

    return (
        <>
            <div className="p-5">
                <div className="text-white text-lg md:text-xl font-semibold text-center">
                    {/* Be a part the of this movement, along with */}
                    Join with us and be a part of the change.
                </div>
                <div className="flex gap-3 text-4xl md:text-6xl font-extrabold text-white mt-2 justify-center">
                    {totalCount && <>
                        {totalCount}{" "}
                        <span className="text-2xl self-center"> + Initiators </span>
                    </>}
                </div>
            </div>
        </>
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