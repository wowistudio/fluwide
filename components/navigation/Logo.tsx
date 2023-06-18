const ListItem: React.FC<React.ComponentProps<"div">> = (props) => {
    return (
        <div {...props}>
            <div className="font-bold">FLUWIDE</div>
        </div>
    )
}

export default ListItem