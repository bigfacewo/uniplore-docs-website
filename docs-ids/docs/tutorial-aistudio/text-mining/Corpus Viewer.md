### 组件介绍
**“语料库查看器（Corpus Viewer）”**控件用于查看输入的文本数据集。
<hr/>

- 输入：
  - cor：文本数据集
- 输出：
  - cor：文本数据集

<hr/>


### 页面介绍
点击**“语料库查看器（Corpus Viewer）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/text-mining/corpus-viewer/interaction.png) ](/img/aistudio/text-mining/corpus-viewer/interaction.png)

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
      文档：输入的文档数量 <br/>
      预处理：是否使用预处理器 <br/>
      POS标签：结果为真或假 <br/>
      N-grams 范围：如果 N-grams 在预处理文本中设置，结果会显示，默认为 1-1 <br/>
      匹配数：RegExpi 过滤的文档数量
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>搜索特征</td> 
      <td>
      RegExp 筛选器过滤特性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>显示特征</td> 
      <td>
      显示特征
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>RegExp过滤器</td> 
      <td>
      用于过滤文档的 Python 正则表达式
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载语料库（Corpus）”**控件加载文本数据集，之后连接**“语料库查看器（Corpus Viewer）”**控件查看文本数据集的详情。  
[ ![](/img/aistudio/text-mining/corpus-viewer/workflow.png) ](/img/aistudio/text-mining/corpus-viewer/workflow.png)

案例中加载“andersen”数据集，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/text-mining/corpus-viewer/workflow-result.png ](/img/aistudio/text-mining/corpus-viewer/workflow-result.png)