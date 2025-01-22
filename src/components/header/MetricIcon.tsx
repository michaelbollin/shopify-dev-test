import type { MetricIconProps } from '@/types/quiz';
import { CheckIcon, CrossIcon } from '../icons/ResultIcon';

export function MetricIcon({ type, count }: MetricIconProps) {
  const icon = type === 'correct' ? <CheckIcon /> : <CrossIcon />;

  return (
    <span 
      className={`${type === 'correct' ? 'text-success' : 'text-error'} flex items-center gap-1`}
      title={`${type === 'correct' ? 'Correct' : 'Wrong'} answers`}
    >
      {icon}
      {count}
    </span>
  );
} 