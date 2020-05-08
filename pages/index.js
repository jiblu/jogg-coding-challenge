export default function Index() {
  const getData = async () => {
    const data = await fetch("/api/cards").then((res) => res.json());
    console.log(data);
  };

  getData();

  return (
    <div>
      Testing
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
        }
      `}
      </style>
    </div>
  )
}
