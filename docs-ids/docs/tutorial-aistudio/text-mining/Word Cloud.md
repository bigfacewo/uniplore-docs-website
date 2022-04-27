### 组件介绍
**“词云（Word Cloud）”**控件根据输入的文本数据集生成词云，词云中词汇的大小表示了表示词汇出现的频率。
<hr/>

- 输入：
  - cor：文本实例
  - top：选择的主题
- 输出：
  - cor：文本实例
  - sel：选中的词
  - wdc：词表

<hr/>


### 页面介绍
点击**“词云（Word Cloud）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/text-mining/word-cloud/param.png) ](/img/aistudio/text-mining/word-cloud/param.png)

点击**查看词云**按钮，查看绘制的词云：  
[ ![](/img/aistudio/text-mining/word-cloud/interaction.png) ](/img/aistudio/text-mining/word-cloud/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>添加颜色</td> 
      <td>
      是否对生成的词云进行颜色标记
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>单词角度</td> 
      <td>
      词云中单词的角度
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>词云表</td> 
      <td>
      文本中出现的单词以及对应的权重
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载语料库（Corpus）”**控件加载文本数据集，之后连接**“词云（Word Cloud）”**控件绘制词云，并选择单词，使用**“查看数据（Data Table）”**控件查看选择的单词信息。    
[ ![](/img/aistudio/text-mining/word-cloud/workflow.png) ](/img/aistudio/text-mining/word-cloud/workflow.png)

案例中加载“andersen”数据集，**“词云（Word Cloud）”**控件中勾选部分单词。案例中控件的配置以及执行结果如下图所示。
[ ![](/img/aistudio/text-mining/word-cloud/workflow-result.png ](/img/aistudio/text-mining/word-cloud/workflow-result.png)