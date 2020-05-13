import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './PetCardSkeleton.scss';

function PetCardSkeleton() {
  const skeleton = (
    <SkeletonTheme highlightColor="#fff">
      <Skeleton />
    </SkeletonTheme>
  );

  return (
    <div className="petCard">
      <div className="petCard__imagePlaceholder">{skeleton}</div>
      <div className="petCard__name petCard__name____skeleton">{skeleton}</div>
      <div className="petCard__footer petCard__footer____skeleton">{skeleton}</div>
    </div>
  );
}

export default PetCardSkeleton;
