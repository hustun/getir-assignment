type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`w-[286px] lg:w-[232px] xl:w-[264px] def:w-[286px] bg-white text-c-black-600 text-sm rounded-sm shadow-filter-container ${
        className !== undefined ? className : ''
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
