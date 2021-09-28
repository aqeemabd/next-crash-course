import headerStyles from '../styles/Header.module.css'

const Header = () => {

    // styling using style tag is better to use when you have a condition. The reason because is your code look messy if you put a lot of styles.
    // For example x = 5. If x > 3, font color will change to red.
    // const x = 5

    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>

            {/* <style jsx>
                {
                    `
                        .title{
                            color: ${x > 3 ? 'red': 'blue'}
                        }
                    `
                }
            </style> */}
        </div>
    )
}

export default Header
