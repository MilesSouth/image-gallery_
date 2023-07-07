const Card = ({ image, photographer }) => {
  return (
    <div>
      <img src={image} alt={photographer} />
      <span>{photographer}</span>
    </div>
  )
}

export default Card
