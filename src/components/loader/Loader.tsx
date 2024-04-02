import classes from './Loader.module.css'

const Loader = () => {
    
  return (
    <div className={classes.box}>
        <div className={classes.loader}>
            {Array(8).fill(0).map((_, i) => (
                <span
                    key={i}
                    style={{
                        '--i': i,
                    } as React.CSSProperties}
                >

                </span>
            ))}
        </div>
        <h6>
            Construyendo...
        </h6>
    </div>
  )
}

export default Loader