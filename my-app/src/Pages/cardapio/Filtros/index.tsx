import filtros from './filtros.json';

type Iopcao = typeof filtros[0];

export default function Filtros(){
    function selecionarFiltro(opcao:Iopcao){

    }
    return(
        <div>
            {filtros.map((opcao)=>(
                <button 
                    key={opcao.id}
                    onClick={()=> selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}