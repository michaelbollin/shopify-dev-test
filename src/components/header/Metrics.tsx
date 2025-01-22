import { MetricIcon } from './MetricIcon';
import type { MetricsProps } from '@/types/quiz';

export function Metrics({ correctCount, wrongCount, onReset }: MetricsProps) {
  return (
    <div className="navbar-end flex items-center gap-4">
      <div className="flex gap-4">
        <MetricIcon type="correct" count={correctCount} />
        <MetricIcon type="wrong" count={wrongCount} />
      </div>
      <button onClick={onReset} className="btn btn-ghost">
        Reset
      </button>
    </div>
  );
} 