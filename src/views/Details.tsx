import React, { useEffect } from 'react';
import { fetchBusinessDetail } from '../fetch';

export function Details(props: any) {
  useEffect(() => {
    async function getBusinessDetail() {
      const response = await fetchBusinessDetail(props.match.params.businessId);
      const businessDetail = await response.json();

      console.log('bizdeets: ', businessDetail);
    };

    getBusinessDetail();
  }, []);

  return(
    <div>{props.match.params.businessId}</div>
  )
}