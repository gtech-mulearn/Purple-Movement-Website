import { useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
// @ts-ignore
import { db } from "../../firebase.js";

const Counter = () => {
  const [totalCount, setTotalCount] = useState(0);


  useEffect(() => {
    const fetchTotalCount = async () => {
      try {
        const colRef = collection(db, "FormData");
        const snapshot = await getCountFromServer(colRef);
        const count = snapshot.data().count;
        setTotalCount(count); // ✅ This was missing

      } catch (error) {
        console.error("Error fetching total count:", error);
      }
    };

    fetchTotalCount();
  }, []);

  return (
    <>
      <div className="mb-[50px]" style={{ marginTop: "0rem" }}>
        <div className="text-white text-lg md:text-xl font-semibold text-center">
          {/* Be a part the of this movement, along with */}
          Join with us and be a part of the change.
        </div>
        <div className="flex gap-3 text-4xl md:text-6xl font-extrabold text-white mt-2 justify-center">
          {totalCount}{" "}
          <span className="text-2xl self-center"> + Initiators </span>
        </div>
      </div>
    </>

  );
};

export default Counter;
