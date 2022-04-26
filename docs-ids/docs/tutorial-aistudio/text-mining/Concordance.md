### 组件介绍
**“语汇索引（Concordance）”**控件用于显示搜索词汇的上下文，该控件可以在文本中查找词汇并显示该词汇的上下文。查找后，用户需选择相应的文本，控件将输出选中的文件，用户可以对其进行进一步分析。
<hr/>

- 输入：
  - cor：文本数据集
  - top：查询词汇
- 输出：
  - sd：选择的文档
  - conc：搜索内容数据

<hr/>


### 页面介绍
点击**“语汇索引（Concordance）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/text-mining/concordance/param.png)

点击“查看数据”按钮，进行文本搜索：
[![](/img/aistudio/text-mining/concordance/interaction.png)](/img/aistudio/text-mining/concordance/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>基本信息</td> 
      <td>
      搜索出的内容信息 <br/>
      &emsp;&emsp;Token：匹配的数量 <br/>
      &emsp;&emsp;类型：单独匹配的数量<br/>
      &emsp;&emsp;匹配数：包含搜索内容的文档
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>单词数</td> 
      <td>
      搜索内容两侧显示的单词数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>查询</td> 
      <td>
      搜索内容
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载语料库（Corpus）”**控件加载文本数据集，之后连接**“语汇索引（Concordance）”**控件进行内容搜索，使用**“查看数据（Data Table）”**控件查看搜索内容。  
![workflow](/img/aistudio/text-mining/concordance/workflow.png)

案例中加载“andersen”数据集，**“语汇索引（Concordance）”**控件单词数设置为8，查询单词为to。案例中控件的配置以及执行结果如下图所示。  
[![](/img/aistudio/text-mining/concordance/workflow-result.png)](/img/aistudio/text-mining/concordance/workflow-result.png)