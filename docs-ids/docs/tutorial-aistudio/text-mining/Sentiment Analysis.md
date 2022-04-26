### 组件介绍
**“情感分析（Sentiment Analysis）”**控件用于对输入的文本数据集进行情感分析。
<hr/>

- 输入：
  - cor：文本数据集
- 输出：
  - cor：文本数据集
<hr/>

### 页面介绍
点击**“情感分析（Sentiment Analysis）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/text-mining/sentiment-analysis/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>方法</td> 
      <td>
      Lin Hu <br/>
      Vader <br/>
      Multilingual sentiment <br/>
      SentiArt
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载语料库（Corpus）”**控件加载文本数据集，之后连接**“情感分析（Sentiment Analysis）”**控件进行情感分析，使用**“查看数据（Data Table）”**控件查看分析结果。  
![workflow](/img/aistudio/text-mining/sentiment-analysis/workflow.png)

案例中加载“andersen”数据集，**“情感分析（Sentiment Analysis）”**控件中，选择Vader方法进行情感分析。案例中控件的配置以及执行结果如下图所示。
![workflow-result](/img/aistudio/text-mining/sentiment-analysis/workflow-result.png)