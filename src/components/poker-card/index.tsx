import React, {
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'

interface Style {
  container?: string
  img?: string
}

interface Props {
  card?: string
  classNames?: Style
  highlight?: string
  render?: () => JSX.Element
}

type PokerCardProps = Props & HTMLAttributes<HTMLDivElement>;

const PokerCard: React.FC<PokerCardProps> = ({
  card,
  classNames,
  highlight,
  render,
}) => {
  const mounted = useRef(false)
  const [img, setImg] = useState()

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    void (async () => {
      const result = await import(
        `../../assets/images/poker/${ card || 'back' }.svg`
      )
      if (mounted.current) {
        setImg(result.default)
      }
    })()
  }, [card])

  return (
    <div className={ classNames?.container }>
      {
        render
          ? render()
          : (
            <img
              alt={ card }
              className={ classNames?.img }
              src={ img }
              style={
                highlight
                  ? { filter: `drop-shadow(0 0 6px ${ highlight }) `.repeat(6).trimEnd() }
                  : {}
              }
            />
          )
      }
    </div>
  )
}

export default PokerCard
