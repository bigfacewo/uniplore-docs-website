### 组件介绍
**“词袋（Bag of Words）”**控件根据输入文本数据集生成词袋信息。
<hr/>

- 输入：
  - cor：文本数据集
- 输出：
  - cor：处理后的文本数据集

<hr/>


### 页面介绍
点击**“词袋（Bag of Words）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/text-mining/bag-of-words/param.png) ](/img/aistudio/text-mining/bag-of-words/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>词频</td> 
      <td>
      词频计算方式：<br/>
      &emsp;&emsp;Count：表示文档中一个词出现的次数<br/>
      &emsp;&emsp;Binary：文档中词出现或者不出现<br/>
      &emsp;&emsp;Sublinear：术语频率对数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>文档频率</td> 
      <td>
      有三个选项，分别是 无、IDF、Smooth IDF<br/>
      &emsp;&emsp;IDF：表示逆文档频率<br/>
      &emsp;&emsp;Smooth IDF：用来添加一个文档频率，防止为零
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>正则化</td> 
      <td>
      正则化方法，分别是无、L1（元素总和）、L2（欧几里得范式）
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载语料库（Corpus）”**控件加载文本数据集，之后连接**“词袋（Bag of Words）”**控件进行数据处理，使用**“查看数据（Data Table）”**控件查看结果。  
[ ![](/img/aistudio/text-mining/bag-of-words/workflow.png) ](/img/aistudio/text-mining/bag-of-words/workflow.png)

案例中加载“andersen”数据集，其余使用默认参数，案例中控件的配置以及执行结果如下图所示。  
[![](/img/aistudio/text-mining/bag-of-words/workflow-result.png)](/img/aistudio/text-mining/bag-of-words/workflow-result.png)