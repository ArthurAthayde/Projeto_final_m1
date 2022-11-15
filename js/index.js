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

        let pPrecoProduto = document.createElement('p');
        pPrecoProduto.classList.add('precoProduto');
        pPrecoProduto.innerHTML = `$${guitarra.value}`;
        liGuitarra.appendChild(pPrecoProduto);

        let buttonProduto = document.createElement('button');
        buttonProduto.classList.add('addCarrinho');
        buttonProduto.id = guitarra.idNumber;
        buttonProduto.innerText = 'Add no quackrrinho';
        liGuitarra.appendChild(buttonProduto);

        let pDescricaoProduto = document.createElement('p');
        pDescricaoProduto.classList.add('descricaoProduto');
        pDescricaoProduto.innerText = guitarra.description;
        liGuitarra.appendChild(pDescricaoProduto);

        let ulTags = document.createElement('ul');
        liGuitarra.appendChild(ulTags);

        for (let j = 0; j < guitarra.tag.length; j++) {
            let tagGuitarra = guitarra.tag[j];

            let liTags = document.createElement('li');
            liTags.classList.add('tags');
            liTags.innerHTML = tagGuitarra;
            ulTags.appendChild(liTags)

        }

        ulGuitarras.appendChild(liGuitarra);
    }




    let carrinhoCount = 0;

    let botoesCarrinho = document.querySelectorAll('.addCarrinho')

    for (let i = 0; i < botoesCarrinho.length; i++) {
        let botao = botoesCarrinho[i];
        botao.addEventListener('click', function (e) {
            let idGuitarra = parseInt(e.target.id);
            if (!verificaCarrinho(idGuitarra)) {
                carrinhoCount++;
                document.querySelector('#carQuant').innerHTML = ` (${carrinhoCount})`


                let guitarra = buscaGuitarra(idGuitarra);
                let elementoGuitarra = criarGuitarraCarrinho(guitarra);
                let listaCarrinho = document.querySelector('.ulCar');
                listaCarrinho.appendChild(elementoGuitarra);

                let divTexto  = document.querySelector('.textoCarrinho');
                divTexto.remove();

            }


        })
    }

    function verificaCarrinho(idGuitarra) {
        let elem = document.querySelector('#c_' + idGuitarra);
        if (elem == null) {
            return false;
        } else {
            return true;
        }
    }


    function buscaGuitarra(idGuitarra) {
        for (let i = 0; i < array.length; i++) {
            let guitarra = array[i];
            if (guitarra.idNumber == idGuitarra) {
                return guitarra;
            }
        }
        return 'Guitarra não cadastrada'
    }


    function criarGuitarraCarrinho(guitarra) {
        let liCarrinho = document.createElement('li');
        let imgCarrinho = document.createElement('img');
        let tituloCarrinho = document.createElement('p');
        let precoCarrinho = document.createElement('p');
        let botaoCarrinho = document.createElement('button');

        liCarrinho.id = 'c_' + guitarra.idNumber;
        liCarrinho.classList.add('liCarrinho')
        imgCarrinho.src = guitarra.imgfront;
        imgCarrinho.classList.add('imgCarrinho');
        tituloCarrinho.innerText = guitarra.nameItem;
        tituloCarrinho.classList.add('nomeCarrinho');
        precoCarrinho.innerHTML = `$ ${guitarra.value}`;
        botaoCarrinho.innerText = 'Remover';
        botaoCarrinho.id = 'carr_' + guitarra.idNumber;
        botaoCarrinho.classList.add('addCarrinho');

        botaoCarrinho.addEventListener('click', function (e) {
            let liCarrinho = document.querySelector('.liCarrinho');
            liCarrinho.remove();
            carrinhoCount--;
            document.querySelector('#carQuant').innerHTML = ` (${carrinhoCount})`
        })

        liCarrinho.appendChild(imgCarrinho);
        liCarrinho.appendChild(tituloCarrinho);
        liCarrinho.appendChild(precoCarrinho);
        liCarrinho.appendChild(botaoCarrinho);

        return liCarrinho;
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

    let quant = document.createElement('small');
    quant.id = "carQuant"
    quant.innerText = " (0)"

    let divTexto = document.createElement('div');
    divTexto.classList.add('textoCarrinho');

    let ulCarrinho = document.createElement('ul');
    ulCarrinho.classList.add('ulCar');

    
    let p1Carrinho = document.createElement('p');
    p1Carrinho.classList.add('pCarrinho')
    p1Carrinho.innerText = 'Sem nada =( \n adicione algo!!';

    divTexto.appendChild(p1Carrinho);
    tituloCarrinho.appendChild(quant);
    divTitulo.appendChild(tituloCarrinho);
    divCarrinho.appendChild(divTitulo)
    divCarrinho.appendChild(divTexto);
    divCarrinho.appendChild(ulCarrinho);

    divLateral.appendChild(divCarrinho);



}

duckGuitars(data);