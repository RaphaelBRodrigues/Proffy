import React from 'react';
import whatsapp from '../../images/whatsapp.svg';
import './styles';

export default () => {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/42044496?s=400&u=12a0f9162132acba3e45460a31fd4a5aa802b55c&v=4" alt=""/>
              <div>
                  <strong>
                      Raphael
                  </strong>
                  <span>
                      História
                  </span>
              </div>
        </header>
          <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          <br></br>
           praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
              </p>  
              <footer>
                  <p>
                      Preço/hora <strong>R$70,00</strong>
                  </p>
                  <button type="button">
                      <img src={whatsapp} alt=""/> Entrar em contato
                  </button>
              </footer>
    </article>
        
    );
}