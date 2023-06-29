import { IconProps } from './props';

export default ({ icon, weight, grade, opsz, fill, onClick }: IconProps) => (
  <span
    className='material-symbols-rounded'
    onClick={onClick}
    style={{
      fontVariationSettings: `'FILL' ${fill || 0}, 'wght' ${weight || 400}, 'GRAD' ${grade || 0}, 'opsz' ${opsz || 20}`,
    }}
  >
    {icon}
  </span>
);
