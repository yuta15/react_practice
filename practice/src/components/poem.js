const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
export default function Poem() {
    let output = [];

    poem.lines.forEach((line, index) => {
        output.push(
            <hr key={index+'-separator'} />
        );
        output.push(
            <p key={index+'-text'}>{line}</p>
        );        
    });

    output.shift();

    return (
      <article>
        {output}
      </article>
    );
  }
  



  