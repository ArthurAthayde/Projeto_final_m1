function duckGuitars(array) {

    let body = document.querySelector('body');
   

    let divContainer = document.createElement('div');
    divContainer.classList.add('container');
   

    let divGuitarras = document.createElement('div');
    divGuitarras.classList.add('vitrine');

    let ulGuitarras = document.createElement('ul');
   

    body.appendChild(divContainer);
    divContainer.appendChild(divGuitarras);
    divGuitarras.appendChild(ulGuitarras);
    

    for (i = 0; i < array.length; i++) {
        let liGuitarra = document.createElement('li');
        liGuitarra.classList.add('card')
        let guitarra = array[i];

        let imgGuitar = document.createElement('img');
        imgGuitar.classList.add(guitarra.id);
        liGuitarra.appendChild(imgGuitar);

        let pTituloProduto = document.createElement('p');
        pTituloProduto.classList.add('tituloProduto');
        pTituloProduto.innerText = guitarra.nameItem;
        liGuitarra.appendChild(pTituloProduto);

        let ulTags = document.createElement('ul');
        liGuitarra.appendChild(ulTags);


        for (let j = 0; j < guitarra.tag.length; j++) {
            let tagGuitarra = guitarra.tag[j];

            let liTags = document.createElement('li');
            liTags.classList.add('tags');
            liTags.innerHTML = tagGuitarra;
            ulTags.appendChild(liTags)
            
        }

        let pDescricaoProduto = document.createElement('p');
        pDescricaoProduto.classList.add('descricaoProduto');
        pDescricaoProduto.innerText = guitarra.description;
        liGuitarra.appendChild(pDescricaoProduto);

        let pPrecoProduto = document.createElement('p');
        pPrecoProduto.classList.add('precoProduto');
        pPrecoProduto.innerHTML = `$${guitarra.value}`;
        liGuitarra.appendChild(pPrecoProduto);

        let buttonProduto = document.createElement('button');
        buttonProduto.classList.add('addCarrinho');
        buttonProduto.innerText = 'Add no quackrrinho';
        liGuitarra.appendChild(buttonProduto);

        ulGuitarras.appendChild(liGuitarra);
    }


        let divLateral = document.createElement('div');
        divLateral.classList.add('sideSpace');

        let divPesquisa = document.createElement('div');
        divPesquisa.classList.add('barraDePesquisa');

        let inputPesquisa = document.createElement('input');
        inputPesquisa.type = "text";
        inputPesquisa.placeholder = 'Procure com o pato';

        let butPesquisa = document.createElement('button');
        butPesquisa.type = "submit";
        butPesquisa.innerText = '*quack*';
        
        divPesquisa.appendChild(inputPesquisa);
        divPesquisa.appendChild(butPesquisa);
        divLateral.appendChild(divPesquisa);
        divContainer.appendChild(divLateral);

        let divCarrinho = document.createElement('div');
        divCarrinho.classList.add('carrinho');

        let divTitulo = document.createElement('div');

        let tituloCarrinho = document.createElement('p');
        tituloCarrinho.classList.add('tituloCarrinho');
        tituloCarrinho.innerText = 'Quackrrinho de compras'

        let divTexto = document.createElement('div');
        divTexto.classList.add('textoCarrinho');

        let p1Carrinho = document.createElement('p');
        p1Carrinho.innerText = 'Sem nada =(';

        let p2Carrinho = document.createElement('p');
        p2Carrinho.innerText = 'adicione algo!!';

        divTexto.appendChild(p1Carrinho);
        divTexto.appendChild(p2Carrinho);

        divTitulo.appendChild(tituloCarrinho);

        divCarrinho.appendChild(divTitulo)
        divCarrinho.appendChild(divTexto);

        divLateral.appendChild(divCarrinho);



}

duckGuitars(data);