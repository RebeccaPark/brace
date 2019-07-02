import React, { useState, useEffect } from 'react';
import './Details.scss';

import { fetchBusinessDetail, fetchBusinessReviews } from '../fetch';

interface BusinessInfo {
  name: string;
  categories: { title: string }[];
  display_phone: string;
  is_closed: boolean;
  photos: string[];
  price: string;
  rating: number;
  review_count: number;
  url: string;
}

export function Details(props: { match: { params: { businessId: string } } }) {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    async function getBusinessDetail() {
      const response = await fetchBusinessDetail(props.match.params.businessId);
      const businessDetail = await response.json();
      setBusinessInfo(businessDetail);
    }

    async function getBusinessReviews() {
      const response = await fetchBusinessReviews(
        props.match.params.businessId,
      );
      const businessReviews = await response.json();
      setReviews(businessReviews.reviews);
    }

    getBusinessDetail();
    getBusinessReviews();
  }, []);

  return (
    <div className="detail">
      {businessInfo && reviews && (
        <React.Fragment>
          <div className="detail__header">
            <div className="detail__header--left">
              <div className="detail__name">
                <a href={businessInfo.url}>{businessInfo.name}</a>
              </div>
              <div className="detail__categories">
                {businessInfo.categories
                  .map((category) => category.title)
                  .join(', ')}
              </div>
            </div>
            <div className="detail__header--right">
              <div className="detail__ratingWrapper">
                <div className="detail__rating">
                  {businessInfo.rating}
                  /5.0
                </div>
                <div className="detail__reviewCount">
                  {businessInfo.review_count}
                  reviews
                </div>
              </div>
              <div className="detail__price">{businessInfo.price}</div>
            </div>
          </div>
          <div className="detail__photos">
            {businessInfo.photos.map((photo) => (
              <div
                className="detail__photo"
                style={{ backgroundImage: `url(${photo})` }}
                key={photo}
              />
            ))}
          </div>
          <div className="detail__reviews">
            Reviews
            {reviews.map((review: { id: string; text: string }) => (
              <div className="detail__review" key={review.id}>
                {review.text}
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
