function NotFound() {
	return (
		<div className="message-container">
			<div className="message-wrap">
				<h2 className="title">404 Not Found</h2>
				<div className="card">
					<div className="icon">
						<svg style={{ width: '6rem', height: '6rem', color: '#d9534f' }} viewBox="0 0 24 24">
							<path fill="currentColor" d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
						</svg>
					</div>

					<div className="desc">
						잘못 접근된 페이지 입니다.
						<br />
						이 페이지가 표시되는 원인은 다음과 같습니다.
						<ul>
							<li>올바른 주소가 아니거나 웹페이지를 찾을 수 없는 경우</li>
							<li>해당 페이지에 대한 접근이 허가되지 않는 경우</li>
							<li>서비스 기능 상 오류가 발생한 경우</li>
						</ul>
                        <br />
						<a href='/'>메인으로 돌아가기</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
