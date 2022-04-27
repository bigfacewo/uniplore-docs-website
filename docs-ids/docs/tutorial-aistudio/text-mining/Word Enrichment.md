### 组件介绍
**“文本增强（Word Enrichment）”**控件对文本数据集进行词富集分析。“Word Enrichment”显示选中子集 p 值列表。p 值越低，表明所选子集单词是重要的可能性更高。
<hr/>

- 输入：
  - sel：从语料库中选择的实例
  - cor：文本数据集
- 输出：
  - 无
<hr/>

### 页面介绍
点击**“文本增强（Word Enrichment）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/text-mining/word-enrichment/param.png) ](/img/aistudio/text-mining/word-enrichment/param.png)

点击“查看结果”按钮，查看分析结果：  
[ ![](/img/aistudio/text-mining/word-enrichment/visualization.png) ](/img/aistudio/text-mining/word-enrichment/visualization.png)

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
      词聚类个数 <br/>
      已选单词个数<br/>
      过滤实例个数<br/>
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>过滤</td> 
      <td>
      p 值：取值范围 0-1，默认为0.01<br/>
      FDR(错误发现率)：取值范围 0-1，默认为0.2<br/>
      获取结果：点击”获取结果“，根据设置在右侧显示单词列表<br/>
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载语料库（Corpus）”**控件连接**“词袋（Bag of Words）”**控件，使用**“数据抽样（Data Sampler）”**连接**“词袋（Bag of Words）”**控件，使用 **“数据抽样（Data Sampler）”**的输出smp、rmn分别连接**“文本增强（Word Enrichment）”**控件的sel、cor输入，  
[ ![](/img/aistudio/text-mining/word-enrichment/workflow.png) ](/img/aistudio/text-mining/word-enrichment/workflow.png)

案例中**“加载语料库（Corpus）”**控件加载“book-excerpts”数据集，**“词袋（Bag of Words）”**控件和**“数据抽样（Data Sampler）”**控件采用默认配置。**“文本增强（Word Enrichment）”**控件设置如下：过滤选择 p 值，设置为 0.2。运行结果如下图所示。  
[ ![](/img/aistudio/text-mining/word-enrichment/workflow-result.png ](/img/aistudio/text-mining/word-enrichment/workflow-result.png)