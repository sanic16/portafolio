import './card.css'

const Card = (
    {
        children,
        className,
        onClick
    }:{
        children: React.ReactNode,
        className?: string,
        onClick?: () => void
    }
) => {
  return (
    <div
        className={`card ${className}`}
        onClick={onClick}
    >
        { children }
    </div>
  )
}

export default Card