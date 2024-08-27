import React from 'react';
import { Box } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import BuildIcon from '@mui/icons-material/Build';
import CategoryIcon from '@mui/icons-material/Category';
import { ModelTagsBox } from './types/modelTagsBox';
import TagSection from './components/TagSection';

const TagsBox: React.FC<ModelTagsBox> = ({ product }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        borderBottom: '1px solid #d3d3d3',
        paddingBottom: '16px',
      }}
    >
      <TagSection icon={<TimelineIcon />} title="Era" items={product.era} />
      <TagSection
        icon={<BuildIcon />}
        title="Mechanics"
        items={product.mechanics}
      />
      <TagSection
        icon={<CategoryIcon />}
        title="Themes"
        items={product.themes}
      />
    </Box>
  );
};

export default TagsBox;
