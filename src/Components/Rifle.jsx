import React, { useState, useEffect} from "react";
import rifle from "../images/rifle.svg";
import corona from "../images/corona.svg";
import "../css/bullet.css";

const Rifle = () => {
  const [start, setStart] = useState(true);
  const [countX, setStateCountX] = useState(0);
  const [countY, setStateCountY] = useState(0);


  let count = 1;
  let play;

  

  useEffect(() => {
    
    play = () => {
      setTimeout(() => {
        alert("game over");
      }, 150000);

      let corona = document.getElementById("corona");
      let coronaHTML = corona.innerHTML;

      for (let i = 1; i <= 100; i++) {
        document.getElementById("bubbles").innerHTML += coronaHTML;
      }

      setInterval(() => {
        document.getElementById(
          "bubbles"
        ).style.transform = `translateX(${(count -= 0.5)}px)`;
      }, 100);

      document.querySelectorAll(".corona").forEach(function (b, i) {
        b.id = i;

        setInterval(() => {
          let random = Math.floor(Math.random() * 200);

          //your code
          setTimeout(() => {
            b.style.transform = `translateY(${(random + 5)}px)`;
            // document.getElementById('bubbles').style.transform= `rotate(90deg)`
          }, 100);
        }, 1000);

        document.body.onkeyup = function (e) {
          if (e.keyCode === 32) {
            //your code
            let rifle = document.getElementById("rifle").childElementCount;
            // console.log(rifle)
            for (let j = 1; j <= rifle; j++) {
              let rand = Math.floor(Math.random() * 100);

              let bullets;
              bullets = document
                .getElementById("rifle")
                .lastElementChild.getBoundingClientRect();
              let div1Top = bullets.top;
              let div1Left = bullets.left;
              let div1Right = bullets.right;
              let div1Bottom = bullets.bottom;

              let virus = document.getElementById(rand).getBoundingClientRect();
              let div2Top = virus.top;
              let div2Left = virus.left;
              let div2Right = virus.right;
              let div2Bottom = virus.bottom;
              let verticalMatch;
              let horizontalMatch;
              if (
                (div2Top > div1Top && div2Top < div1Bottom) ||
                (div2Bottom > div1Top && div2Bottom < div1Bottom)
              ) {
                verticalMatch = true;
              } else {
                verticalMatch = false;
              }

              if (
                (div2Right > div1Left && div2Right < div1Right) ||
                (div2Left < div1Right && div2Left > div1Left)
              ) {
                horizontalMatch = true;
              } else {
                horizontalMatch = false;
              }
              if (horizontalMatch || verticalMatch) {
                console.log(document.getElementById(rand));
                setTimeout(() => {
                  document.getElementById(rand).style.width = "200px";
                  document.getElementById(rand).style.height = "200px";
                  console.log(
                    document.getElementById("bubbles").childElementCount
                  );
                  console.log(true);
                }, 100);
                setTimeout(() => {
                  document.getElementById(
                    rand
                  ).style.transform = `translateY(${-15}px)`;
                }, 110);
                setTimeout(() => {
                  document.getElementById(rand).display = "none";
                }, 120);
              } else {
                console.log(false);
              }

              /**** */
            }

            let randin = Math.floor(Math.random() * 100);
            let gun;
            gun = document.getElementById("gun").getBoundingClientRect();
            let div1Top = gun.top;
            let div1Left = gun.left;
            let div1Right = gun.right;
            let div1Bottom = gun.bottom;

            let virus = document
              .getElementById(randin)
              .parentElement.getBoundingClientRect();
            let div2Top = virus.top;
            let div2Left = virus.left;
            let div2Right = virus.right;
            let div2Bottom = virus.bottom;
            let verticalMatch;
            let horizontalMatch;
            if (
              (div2Top > div1Top && div2Top < div1Bottom) ||
              (div2Bottom > div1Top && div2Bottom < div1Bottom)
            ) {
              verticalMatch = true;
            } else {
              verticalMatch = false;
            }

            if (
              (div2Right > div1Left && div2Right < div1Right) ||
              (div2Left < div1Right && div2Left > div1Left)
            ) {
              horizontalMatch = true;
            } else {
              horizontalMatch = false;
            }
            if (horizontalMatch && verticalMatch) {
              alert("game over");
            } else {
              console.log(false);
            }
          }
        };
      });
    };

    //document.getElementById('btnStart').addEventListener('click',

    // )

    document.onkeydown = function (event) {
      switch (event.keyCode) {
        case 38:
          setStateCountX(countX - 10);
          document.getElementById(
            "rifle"
          ).style.transform = `translateY(${countX}px)`;
          break;

        case 40:
          setStateCountX(countX + 10);
          document.getElementById(
            "rifle"
          ).style.transform = `translateY(${countX}px)`;
          break;
        case 32:
          setStateCountY(countY + 10);
          const bullet = () => {
            let rifle = document.getElementById("rifle");
            let bullet = document.createElement("DIV");
            bullet.className = "bullet";
            rifle.appendChild(bullet);
            console.log(rifle);
           

            setInterval(() => {
              setTimeout(() => {
                bullet.style.transform = `translateX(${(count += 10)}px)`;

                // body.appendChild(bullet)
                // bullet.style.marginTop=(random+200)+"px"
                setTimeout(() => {
                  bullet.style.display = "none";
                  //rifle.removeChild(bullet)
                }, 1500);
              }, 100);

              /* setInterval(()=>{
                              bullet.style.transform=`translateY(${random-=1}px)`
                            },10)*/

              // console.log(count+1)
            }, 0.5);
          };
          bullet();
          break;
        case 20:
          break;
        default:
      }
    };
  });

  return (
    <div id="body">
      <div style={{ display: "none" }} id="corona">
        <img
          src={corona}
          alt=""
          style={{ width: "40px", height: "40px" }}
          className="corona"
        />
      </div>
      <div id="start">
        <div>hello</div>
        <button
          id="btnStart"
          onClick={() => {
            setStart(start && play);
          }}
        >
          START
        </button>
      </div>
      <div id="rifle">
        <img src={rifle} alt="rifle" className="rifle" id="gun" />
      </div>
      <div id="newBody"></div>

      <div id="bubbles-cont">
        <div></div>
        <div id="bubbles"></div>
      </div>
    </div>
  );
};

export default Rifle;
