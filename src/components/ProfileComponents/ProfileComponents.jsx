import { useLoaderData } from "react-router-dom";
import CardPanel from "../CardPanel/CardPanel";

export function PropertiesFavorites() {
  const cards = useLoaderData();
  return <CardPanel fromUser={true} cards={cards} />;
}
export function PropertiesContacted() {
  const cards = useLoaderData();
  return <CardPanel fromUser={true} cards={cards} />;
}
export function PropertiesActive() {
  const cards = useLoaderData();
  console.log(cards);
  const cardsActive = cards.filter((card) => card.active);
  return <CardPanel fromUser={false} cards={cardsActive} />;
}
export function PropertiesClosed() {
  const cards = useLoaderData();
  const cardsClosed = cards.filter((card) => !card.active);
  return <CardPanel fromUser={false} cards={cardsClosed} />;
}
