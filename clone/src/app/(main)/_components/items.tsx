import React from "react";
import { useEffect, useState } from "react";
interface YourDataType {
  // Define the structure of your data here
  item: string; // Example property, replace with actual property name
}
const Items = () => {
  const [data, setData] = useState<YourDataType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/documents");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    const interval = setInterval(() => {
      fetchData(); // Fetch data every 1 second
    }, 1000);

    return () => clearInterval(interval);
  }, [setData]);
  // Call the fetchSessionData function when the component mounts
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(data);
  return (
    <>
      <div className="mx-4">
        {" "}
        {data?.map((item: any, index: number) => (
          <h3 key={index}>{item.title}</h3>
        ))}
      </div>
    </>
  );
};

export default Items;
