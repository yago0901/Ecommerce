export default function ProdutosArray() {
  const componentArray = [
    <p key="1">Produto 1</p>,
    <p key="2">Produto 2</p>,
    <p key="3">Produto 3</p>,
    <p key="4">Produto 4</p>,
    <p key="5">Produto 5</p>,
    ];
  return (
    <div>
        {componentArray}
      </div>
  );
}