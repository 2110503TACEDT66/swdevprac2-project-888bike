'use client'

const InteractiveCard = ({children} : {  children: React.ReactNode}) => {
    function onCardMouseAction (event: React.SyntheticEvent) {
        if(event.type == 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl','bg-neutral-200')
        } else {
            event.currentTarget.classList.remove('shadow-2xl','bg-neutral-200')
            event.currentTarget.classList.add('shadow-lg')
        }
    }
    return (
        <div className='w-[250px] h-[500px] bg-white rounded-lg overflow-hidden shadow-lg'
            onMouseOver={(e) => onCardMouseAction(e)}
            onMouseOut={(e) => onCardMouseAction(e)}
        >
            {children}
        </div>
    )
}

export default InteractiveCard