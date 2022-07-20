import styles from './Item.module.scss';

export default function Item (){
    return(
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={} alt="imagem"/>
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> Macarrão</h2>
                    <p>Descrição do macarrão</p>
                </div>
                <div className={styles.itens__tags}>
                    <div className={styles.item__tipo}>
                        massa
                    </div>
                    <div className={styles.item__porcao}>
                        massa
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        massa
                    </div>
                    <div className={styles.item__valor}>
                        massa
                    </div>

                </div>

            </div>
        </div>
    )
}