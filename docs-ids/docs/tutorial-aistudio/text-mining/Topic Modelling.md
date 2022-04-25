### 组件介绍
**“主题模型（Topic Modelling）”**控件用于对输入的文本数据集进行情感分析。
<hr/>

- 输入：
  - cor：文本数据集
- 输出：
  - cor：文本数据集
  - selTop：选择主题的单词权重
  - allTop：所有关键字的权重
  
<hr/>

### 页面介绍
点击**“主题模型（Topic Modelling）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/text-mining/topic-modelling/param.png)

点击“查看数据”按钮，进行文本搜索：  
![interaction](/img/aistudio/text-mining/topic-modelling/interaction.png)

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
      模型： <br/>
      &emsp;&emsp;隐式语义索引 <br/>
      &emsp;&emsp;潜在狄利克雷分布
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载语料库（Corpus）”**控件加载文本数据集，使用**“语料库查看器（Corpus Viewer）”**查看文本数据，同时连接**“主题模型（Topic Modelling）”**控件进对数据进行处理，之后使用**“语料库查看器（Corpus Viewer）”**控件查看处理后的数据。  
![workflow](/img/aistudio/text-mining/topic-modelling/workflow.png)

案例中加载“andersen”数据集，参数使用默认参数，案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/text-mining/topic-modelling/workflow-result.png)