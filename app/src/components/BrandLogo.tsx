type BrandLogoProps = {
  className?: string;
  alt?: string;
};

export default function BrandLogo({
  className = 'h-12 w-auto',
  alt = 'DevNox Lab',
}: BrandLogoProps) {
  return (
    <img
      src="/images/FullLogo.jpg"
      alt={alt}
      className={className}
    />
  );
}