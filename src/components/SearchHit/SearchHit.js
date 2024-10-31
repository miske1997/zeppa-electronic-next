import { useRouter } from "next/navigation";
import { Highlight } from "react-instantsearch";

export const Hit = ({ hit }) => {

  const router = useRouter()

  function hitClicked(){
    router.push(`/article/${hit.categoryId}/${hit.id}`)
  }

  return (
    <article style={{cursor: "pointer"}} onClick={() => hitClicked()}>
      <div className="hit-name">
			  <Highlight attribute="name" hit={hit} />
			</div>
    </article>
  );
};