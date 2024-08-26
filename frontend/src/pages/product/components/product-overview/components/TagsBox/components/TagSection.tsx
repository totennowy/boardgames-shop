import { Box, Chip, Typography } from '@mui/material';
import { ModelTagSection } from '../types/modelTagSection';

const TagSection: React.FC<ModelTagSection> = ({ icon, title, items }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    {icon}
    <Typography fontWeight={600}>{title}:</Typography>
    <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {items.map((item, index) => (
        <Chip key={index} label={item} sx={{ bgcolor: '#f0f0f0' }} />
      ))}
    </Box>
  </Box>
);

export default TagSection;
