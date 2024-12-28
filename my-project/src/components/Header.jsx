import TopBar from "./HeaderComponents/TopBar"

export const Header = ({current_page}) => {
    return (
      <section id="about">
        <TopBar current_page={current_page} />
      </section>
    )
}
