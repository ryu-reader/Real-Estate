function Title({title, subtitule}: {title: string, subtitule?: string}) {
  return (
    <div>
        <p>{title}</p>

        {subtitule && (
            <p>{subtitule}</p>
        )}

    </div>
  )
}

export default Title