import React from 'react';

const pieces = []

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const colors = ['#00fff9', '#ffed00', '#ff0000', '#ff7e00', '#00ed00']

for (let i = 0; i < 10; i+=1) {
  let styling = {
    top:randomNum(0, 100),
    right:randomNum(0, 100),
    size:randomNum(2, 15),
    color:i,
    id:`piece${i}`,
  }
  pieces.push(styling);
}

class CoverArt extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      timesUpdated:0,
    }
    this.movePiece = this.movePiece.bind(this);
    this.selectAllPieces = this.selectAllPieces.bind(this);
  }

  componentDidMount () {
    setInterval(this.selectAllPieces, 25000);
    this.selectAllPieces();
  }

  movePiece (e, top, right) {
    this.setState({
      timesUpdated: this.state['timesUpdated'] + 1,
    })
    e.style.right = `${right}%`;
    e.style.top = `${top}%`;
  };

  selectAllPieces() {
    const allPieces = document.querySelectorAll('.piece');
    allPieces.forEach(e => {
      let top = randomNum(0, 100);
      let right = randomNum(0, 100);
      if ((top === 0) || (right === 0)) {
      
      } else {
        let bool = randomNum(0, 4);
        // console.log(bool);
        if (bool === 0) {
          top = 0;
        } else if (bool === 1) {
          right = 0;
        } else if (bool === 2) {
          top = 100;
        } else if (bool === 3) {
          right = 100;
        }
      }
      // console.log(top, right);
      this.movePiece(e, top, right);
      if (this.state.timesUpdated === 0) {
        setTimeout(this.selectAllPieces, 100)
      } 
    })
  }

  render() {
    return (
      <div className="cover-art">
        <div className="canvas">
          {pieces.map(({ right, top, size, color, id }) => {
            const pieceStyle = {
              right: `${right}%`,
              top: `${top}%`,
              backgroundColor: colors[color],
              width:`${size}vw`,
              height:`${size}vw`,
            }
            return <div id={id} className="piece" style={pieceStyle}></div>
          })}
        </div>
      </div>
    );
  }
}

module.exports = CoverArt;