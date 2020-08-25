import React from "react";
import { Canvas } from "react-three-fiber";
import Scene from "./containers/Scene";

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

function App() {
  let cameraAspect = WIDTH > HEIGHT ? WIDTH / HEIGHT : HEIGHT / WIDTH;
  return (
    <>
      <section id="main" className="bg-dark text-white h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md text-center text-md-left">
              <h1 className="display-1">Hi, I'm Faizal.</h1>
              <p className="lead text-muted">
                I'm a full-stack Web Developer from Bandung, Indonesia.
              </p>
            </div>
            <div className="col-md">
              <div className="responsive-square">
                <div className="position-absolute w-100 h-100">
                  <Canvas
                    gl={{ antialias: true }}
                    camera={{
                      fov: 45,
                      aspect: cameraAspect,
                      near: 1,
                      far: 500,
                    }}
                    pixelRatio={window.devicePixelRatio}
                  >
                    <Scene />
                  </Canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container mt-5 mb-5">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quas
            iste quaerat distinctio labore repudiandae, laborum doloribus ipsum
            excepturi eligendi, quod ipsa voluptate quidem eaque deleniti quos
            ducimus optio quae?
          </p>
          <p>
            Pariatur facere rerum voluptatem nisi excepturi perspiciatis
            consectetur consequatur magni. Fugiat quos in minima. Nemo veniam
            quas accusantium voluptatem tempora laudantium et reprehenderit
            placeat atque, mollitia nobis unde, molestiae labore?
          </p>
          <p>
            Nihil itaque asperiores natus, exercitationem culpa, tenetur
            temporibus, sequi incidunt accusantium non ab corporis. Suscipit,
            possimus minus iusto exercitationem quae odio neque, cupiditate
            dicta quia necessitatibus enim eum quisquam similique.
          </p>
          <p>
            Et velit iusto ipsam ab quas iure! Eum, harum officia dolore
            praesentium consequuntur dolores debitis at vero accusantium
            quibusdam ex assumenda in doloremque ea impedit nulla asperiores
            nihil magnam voluptas.
          </p>
          <p>
            Corporis, quam libero, dolore ea possimus et cupiditate ut culpa
            harum ipsa dignissimos officia minima illum, voluptatum consequuntur
            perspiciatis quidem? Accusantium eveniet enim possimus harum quis
            cumque ipsum culpa soluta!
          </p>
          <p>
            Adipisci tempore quia possimus repudiandae voluptatem enim velit
            veniam accusamus nam voluptatibus vero, quis corporis, ipsum
            eligendi accusantium? Accusamus illum consectetur, ipsam cumque
            blanditiis necessitatibus facilis labore excepturi. Aut, odit?
          </p>
          <p>
            Eveniet fugiat ratione aut similique? Sed ut voluptatibus neque vero
            mollitia obcaecati corporis alias molestias eveniet, voluptas
            expedita ex non consequatur odit, laborum necessitatibus dolorum
            dicta aperiam, vel adipisci ipsum?
          </p>
          <p>
            Dignissimos sint molestiae et, eligendi odio doloremque possimus
            nobis eius neque inventore eveniet recusandae molestias architecto
            dolor quibusdam quaerat repellendus numquam pariatur nostrum, fugit
            dolorem alias quisquam, voluptas eaque! Maiores.
          </p>
          <p>
            Deleniti iste sunt fugit nesciunt dignissimos sint, assumenda hic
            laborum quisquam minus cumque incidunt dolores ad consectetur
            dolorem veritatis reiciendis quam libero velit, quaerat iure natus
            eos itaque. Autem, officia.
          </p>
          <p>
            Commodi culpa, vitae praesentium provident sunt debitis quisquam
            obcaecati adipisci aliquam deleniti! Error non aut nam accusamus
            velit sunt iusto, tenetur tempora ut ipsum eveniet repudiandae
            culpa, consequuntur reprehenderit porro?
          </p>
          <p>
            Saepe quasi eius, id laborum enim blanditiis temporibus ratione
            alias libero ipsum mollitia fuga porro atque pariatur esse rem
            quibusdam non consequuntur asperiores nemo molestiae soluta.
            Perspiciatis sequi explicabo sunt.
          </p>
          <p>
            Nam voluptas corrupti saepe ut fuga aperiam quibusdam voluptates, a
            dicta iusto dolorem. Voluptatibus quis eius assumenda eaque, maiores
            provident expedita odio error id consequatur laudantium incidunt
            totam perferendis eum?
          </p>
          <p>
            Incidunt, exercitationem debitis beatae asperiores ipsum suscipit
            neque voluptatibus ut deleniti voluptatum impedit blanditiis
            consequuntur tempora iusto totam quisquam ullam. Tempora nam dicta
            sit impedit laborum, consectetur minus enim in.
          </p>
          <p>
            Enim qui ratione, blanditiis ipsa harum dignissimos mollitia ipsum,
            ea corrupti, eum consectetur? Deserunt modi incidunt quod
            necessitatibus tempora iure itaque consectetur ipsum id nulla.
            Tempore repellendus eaque amet quae!
          </p>
          <p>
            Ipsum, delectus maxime aperiam vel odit iusto soluta temporibus
            harum tempora necessitatibus cumque blanditiis, minima reprehenderit
            voluptatum eius optio illo quo repudiandae dolores rerum accusamus
            enim. Quaerat delectus esse deserunt.
          </p>
          <p>
            Laboriosam minus, esse tempora neque ipsam numquam cum aperiam
            reiciendis animi illum quos maxime aliquam unde quidem qui saepe
            velit minima rerum nam quia. Libero non et inventore quae fuga!
          </p>
          <p>
            Veniam illo id modi, exercitationem alias quae tenetur aliquid eum
            temporibus? Hic, ab veniam debitis molestiae magnam cum accusantium
            temporibus qui repellat eos at officia voluptate recusandae
            doloribus maiores nisi.
          </p>
          <p>
            Molestiae cupiditate necessitatibus veniam commodi, unde fugit
            dolorum harum ea nulla sapiente doloremque, a magni quidem explicabo
            iste saepe molestias optio quo ipsam non odit. Recusandae voluptatem
            earum excepturi officia.
          </p>
          <p>
            Molestias, aliquid aspernatur laborum reiciendis esse veritatis
            soluta dolorem? Nulla nihil, non vero enim qui nisi quaerat
            perspiciatis praesentium eveniet quae culpa eos molestiae. Ipsum
            repellendus nemo numquam et voluptas.
          </p>
          <p>
            Rem quos quasi, at ipsam, veritatis nam consequuntur repudiandae
            velit asperiores accusantium repellat sunt inventore magni iste
            voluptatum sed aperiam. Repellendus corporis architecto error natus
            ad unde magnam ullam fugit!
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
