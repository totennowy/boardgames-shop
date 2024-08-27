import React from 'react';
import { Box, Typography } from '@mui/material';

import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Face4Icon from '@mui/icons-material/Face4';
import { ModelProductOverview } from './types/modelProductOverview';
import ProductAttributeBox from './components/ProductAttributeBox';
import DifficultyBox from './components/DifficultyBox';
import RatingHexagon from './components/RatingHexagon';
import TagsBox from './components/TagsBox/TagsBox';

const ProductOverview: React.FC<ModelProductOverview> = ({
  productByIdData,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {productByIdData.rating && (
          <RatingHexagon rating={productByIdData.rating} />
        )}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography fontSize={26} fontWeight={500}>
            {productByIdData.name}
          </Typography>
          <Typography fontSize={16} fontWeight={300}>
            {productByIdData.teaser}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: '10px',
          borderTop: '1px solid #d3d3d3',
          borderBottom: '1px solid #d3d3d3',
        }}
      >
        <ProductAttributeBox
          icon={<GroupIcon sx={{ width: 'auto', height: '60px' }} />}
          upperLabel={productByIdData.players}
          lowerLabel={` Best for: ${productByIdData.bestPlayers} players`}
        />

        <ProductAttributeBox
          icon={<AccessTimeIcon sx={{ width: 'auto', height: '60px' }} />}
          upperLabel="60 - 120 min"
          lowerLabel="Playing Time"
        />

        <ProductAttributeBox
          icon={<Face4Icon sx={{ width: 'auto', height: '60px' }} />}
          upperLabel={`${productByIdData.age} +`}
          lowerLabel="Suggested Age"
        />
        <DifficultyBox difficulty={productByIdData.difficulty} />
      </Box>

      <TagsBox product={productByIdData} />
    </Box>
  );
};

export default ProductOverview;

