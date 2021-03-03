 @@ hightlight id_;_720968_;_script infofile_;_ZIP::ssf8.xml_;_
SystemUtil.CloseProcessByName "iexplore.exe"
SystemUtil.Run "iexplore.exe", "https://advantageonlineshopping.com"
For sendFeedback = 1 To 4 Step 1
	

	Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf9.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs").Select "#"&sendFeedback @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs")_;_script infofile_;_ZIP::ssf10.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs").Select "#"&sendFeedback @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs")_;_script infofile_;_ZIP::ssf11.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs").Set "nuno.cunha@hakken-group.com" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs")_;_script infofile_;_ZIP::ssf12.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs").Set "test uft" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs")_;_script infofile_;_ZIP::ssf13.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send_btnundefined").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send btnundefined")_;_script infofile_;_ZIP::ssf14.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Check CheckPoint("CONTINUE SHOPPING") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING")_;_script infofile_;_ZIP::ssf15.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Click
Next
SystemUtil.CloseProcessByName "iexplore.exe"


