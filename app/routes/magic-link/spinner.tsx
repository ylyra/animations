/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css'

const bars = Array(12).fill(0)

export function Spinner({
  color,
  size = 20,
}: {
  color: string
  size?: number
}) {
  return (
    <div
      className="spinner-wrapper"
      style={
        {
          '--spinner-size': `${size}px`,
          '--spinner-color': color,
        } as any
      }
    >
      <div className="spinner">
        {bars.map((_, i) => (
          <div className="bar" key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  )
}
