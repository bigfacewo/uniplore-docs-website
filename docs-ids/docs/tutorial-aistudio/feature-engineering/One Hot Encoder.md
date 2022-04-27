### 组件介绍
**“独热编码”（One Hot Encoder）**控件根据用户配置对指定的属性进行独热编码的操作。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“独热编码”（One Hot Encoder）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/one-hot-encoder/param.png) ](/img/aistudio/feature-engineering/one-hot-encoder/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>编码属性选择</td> 
      <td>
      选择需要进行独热编码操作的属性
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“独热编码”（One Hot Encoder）**控件对数据集的【iris】属性进行独热编码，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/feature-engineering/one-hot-encoder/workflow.png) ](/img/aistudio/feature-engineering/one-hot-encoder/workflow.png)

案例中加载 iris 数据集，选择【iris】属性进行编码。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/feature-engineering/one-hot-encoder/workflow-result.png) ](/img/aistudio/feature-engineering/one-hot-encoder/workflow-result.png)