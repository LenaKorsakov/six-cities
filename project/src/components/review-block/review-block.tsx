import { memo, useMemo } from 'react';
import ReviewItem from '../review-item/review-item';
import ReviewsForm from '../reviews-form/reviews-form';
import { useAppSelector } from '../../hooks';

import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

import { AuthorizationStatus } from '../../const/authorization-status';
import { REVIEW_MAX_COUNT} from '../../const/review';

import { getReviews } from '../../store/offer-property-data/offer-property-data-selectors';
import { sortReviewByTime } from '../../utiles/sort-compare';
import { getAdaptedReview } from '../../adapter/adapter';

type ReviewBlockProps = {
 offerId: number;
}

function ReviewBlock({offerId}: ReviewBlockProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const allReviews = useAppSelector(getReviews);
  const reviewsAdapted = allReviews.map(getAdaptedReview);

  const reviews = useMemo(() => reviewsAdapted.sort(sortReviewByTime).slice(0, REVIEW_MAX_COUNT), [reviewsAdapted]);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews && reviews.map((review) =>(
          <ReviewItem
            review={review}
            user={review.user}
            key={review.id}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm offerId={offerId} />}
    </section>
  );
}

export default memo(ReviewBlock);
