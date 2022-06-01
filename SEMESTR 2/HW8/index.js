class Comment extends React.Component {
    render()  {
        return(
                <div class Name="Comment">
                    <div class Name="UserInfo">
                        <img className="Avatar"
                            src={author.avatarUrl}
                            alt={author.name}
                        />
                        <div class Name="UserInfo-name">
                                    {author.name}
                        </div>
                    </div>
                    <div class Name="Comment-text">
                            {text}
                    </div>
                        <div class Name="Comment-date">
                            {formatDate(date)}
                        </div>
                    </div>
                ) 
                }
        
    }
