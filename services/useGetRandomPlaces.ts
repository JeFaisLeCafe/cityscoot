import { API_URL } from "../constantes";
import axios from "axios";
import { useEffect, useState } from "react";
import { Location } from "../models";

export interface Params {
  size: number;
}

const useGetRandomPlaces = ({ size }: Params = { size: 20 }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Location[]>([]);

  function refetch(params: Params) {
    fetchData(params);
  }

  useEffect(() => {
    fetchData({ size });
  }, [size]);

  const fetchData = async (params: Params) => {
    try {
      setIsLoading(true);
      setError("");
      const data = await axios.get<Location[]>(API_URL, {
        params: params
      });
      setData(data.data);
    } catch (e) {
      console.warn("ERROR fetchhing data", e);
      setError(`ERROR fetchhing data: ${e}`);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, refetch };
};

export default useGetRandomPlaces;
