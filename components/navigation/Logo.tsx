const ListItem = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div className='my-2 mx-4 flex items-center justify-center' onClick={onClick}>
            <div className="font-bold">FLUWIDE</div>
        </div>
    )
}

export default ListItem