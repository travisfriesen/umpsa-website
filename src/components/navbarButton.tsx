interface IButton {
    label: string;
}

export const NavbarButton = ({ label }: IButton) => {
    return (
        <div className={`hover:bg-green-300 rounded-2xl w-full text-center`}>
            {label}
        </div>
    )
}
