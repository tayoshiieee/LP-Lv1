import axios from 'axios';
import { useState } from 'react';
import { GssData } from '../type/gssData';

export const useGss = () => {
  const [gss, setGss] = useState<Array<GssData>>([]);

  const getGss = () => {
    axios
      .get<Array<GssData>>(
        'https://api.steinhq.com/v1/storages/627bbaacbca21f053e928f18/downloadCount',
      )
      .then((res) => {
        setGss(res.data);
      });
  };
  return { getGss, gss };
};
